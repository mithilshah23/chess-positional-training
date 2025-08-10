import csv
import json

import chess
import re
import unicodedata
import chess.pgn
import chess.engine

engine = chess.engine.SimpleEngine.popen_uci("./stockfish/stockfish-macos-m1-apple-silicon")

def moves_to_fen(moves_str):
    cleaned_moves = re.sub(r'\d+\.', '', moves_str).strip()
    moves = cleaned_moves.split()
    board = chess.Board()
    for move in moves:
        board.push_san(move)
    info = engine.analyse(board, chess.engine.Limit(depth=20))
    eval = info["score"].pov(chess.WHITE).score()
    pv_moves = info.get("pv", [])
    san_moves = []

    temp_board = board.copy()
    for move in pv_moves:
        san_moves.append(temp_board.san(move))
        temp_board.push(move)

    return board.fen(), eval, ' '.join(san_moves)

def sanitize_opening_name(opening_name):
    norm_opening = unicodedata.normalize('NFKD', opening_name).encode('ascii', 'ignore').decode('ascii')
    for ch in [" ", ",", "'", "-", ".", "(", ")"]:
        norm_opening = norm_opening.replace(ch, "")
    return norm_opening

def sanitize_eco_code(eco_code):
    norm_eco = unicodedata.normalize('NFKD', eco_code).encode('ascii', 'ignore').decode('ascii')
    eco_modified = norm_eco.replace("-", "_")
    for ch in [" ", ",", "'", ".", "(", ")"]:
        eco_modified = eco_modified.replace(ch, "")
    return eco_modified

def sanitize_name_with_eco(opening_name, eco_code):
    sanitized_opening = sanitize_opening_name(opening_name)
    sanitized_eco = sanitize_eco_code(eco_code)
    return sanitized_opening + '_' + sanitized_eco

def process_csv_to_fen(csv_file="ChessOpeningsMoves.csv", json_file="ChessOpeningsMoves.json"):
    count = 0
    fen_data = []
    with open(csv_file, "r", newline="", encoding="utf-8") as csvfile:
        reader = csv.reader(csvfile)
        next(reader)
        for row in reader:
            sanitized_name = sanitize_name_with_eco(row[0], row[1])
            moves = row[2].strip()
            fen_str, eval, best_line = moves_to_fen(moves)
            fen_data.append({
                "name": row[0],
                "ecoCode": row[1],
                "moves": moves,
                "fen": fen_str,
                "sanitizedName": sanitized_name,
                "evaluation": eval,
                "bestContinuation": best_line
            })
            count += 1
            print(fen_data[-1])
    with open(json_file, "w", encoding="utf-8") as f:
        json.dump(fen_data, f, indent=2, ensure_ascii=False)

def main():
    # engine.configure({"Threads": 6, "Hash": 32768})
    process_csv_to_fen()

if __name__ == "__main__":
    main()
