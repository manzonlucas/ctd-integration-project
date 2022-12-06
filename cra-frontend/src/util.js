export function formatText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).replaceAll('_', ' ');
}