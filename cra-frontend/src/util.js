export function formatText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).replaceAll('_', ' ');
}

export function formatDate(date) {
  {
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    return `${y}-${m}-${d}`
  }
}