export const truncateDescription = (
  description: string,
  maxLength: number = 100
) => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength) + "...";
};
