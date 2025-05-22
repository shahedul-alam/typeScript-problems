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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return { Make: this.make, Year: this.year };
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return { Model: this.model };
  }
}

function processValue(value: string | number): number {
  if(typeof value === "string") {
    return value.length;
  }

  return value * 2;
}