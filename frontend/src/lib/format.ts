export const TYPE_LABELS: Record<string, string> = {
  Engineering: "Engineering",
  Arts: "Arts",
  Management: "Management",
  Medical: "Medical",
  Science: "Science",
};

export function inr(value: number): string {
  if (value >= 10000000) {
    return `INR ${(value / 10000000).toFixed(1)} Cr`;
  }
  if (value >= 100000) {
    return `INR ${(value / 100000).toFixed(1)} L`;
  }
  return `INR ${value.toLocaleString("en-IN")}`;
}
