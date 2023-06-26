export const genres = {
    "fantasy": "Фэнтези",
    "horror": "Ужасы",
    "action": "Боевик",
    "comedy": "Комедия"
} as const;

export type Genre = keyof typeof genres;

export const cinema = {
    
}