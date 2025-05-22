function formatString(input: string, toUpper?: boolean): string {
  if (typeof toUpper === "undefined" || toUpper) {
    return input.toUpperCase();
  }

  return input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredBooks: { title: string; rating: number }[] = items.filter(
    (item: { title: string; rating: number }) => item.rating >= 4
  );

  return filteredBooks;
}
