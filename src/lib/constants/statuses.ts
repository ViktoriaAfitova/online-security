export const Statuses = {
  IN_PROGRESS: 'В работе',
  OVERDUE: 'Просрочена', 
  COMPLETED: 'Выполнена',
  FEEDBACK: 'Есть отзыв',
} as const;


export const statusesMap: Record<string, string> = {
  [Statuses.IN_PROGRESS]: 'rgba(93, 93, 93, 1)',
  [Statuses.OVERDUE]: 'rgba(249, 55, 44, 1)',
  [Statuses.COMPLETED]: 'rgba(28, 154, 19, 1)',
  [Statuses.FEEDBACK]: 'rgba(1, 158, 193, 1)',
}
