import PawnB from './pawn_b.png';
import PawnW from './pawn_w.png';
import QueenB from './queen_b.png';
import QueenW from './queen_w.png';
import RookB from './rook_b.png';
import RookW from './rook_w.png';
import BishopB from './bishop_b.png';
import BishopW from './bishop_w.png';
import KingB from './king_b.png';
import KingW from './king_w.png';
import KnightB from './knight_b.png';
import KnightW from './knight_w.png';

export default {
    pawnB: PawnB,
    pawnW: PawnW,
    black: [RookB, KnightB, BishopB, QueenB, KingB, BishopB, KnightB, RookB],
    white: [RookW, KnightW, BishopW, QueenW, KingW, BishopW, KnightW, RookW]
}