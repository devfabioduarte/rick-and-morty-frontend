export function translateGender(gender: string | undefined): string {
  if (!gender) return "unknown";
  if (gender.toLowerCase() === "male") return "male";
  if (gender.toLowerCase() === "female") return "female";
  return gender.toLowerCase();
}

export function getPronoun(gender: string | undefined): "He" | "She" | "They" {
  if (!gender) return "They";
  if (gender.toLowerCase() === "male") return "He";
  if (gender.toLowerCase() === "female") return "She";
  return "They";
}

export function translateStatus(status: string | undefined): string {
  if (!status) return "unknown";
  if (status.toLowerCase() === "alive") return "alive and well";
  if (status.toLowerCase() === "dead") return "dead";
  if (status.toLowerCase() === "unknown")
    return "It can´t be told if he is alive or dead.";
  return status.toLowerCase();
}

export function getStatusPhrase(
  gender: string | undefined,
  status: string | undefined
) {
  const statusText = translateStatus(status);
  if (statusText === "alive and well" || statusText === "dead") {
    return `${getPronoun(gender)} is ${statusText}.`;
  }
  return statusText;
}
export function getName(
  obj: { name?: string } | undefined,
  fallback = "Unknown"
): string {
  if (
    !obj ||
    typeof obj !== "object" ||
    !obj.name ||
    obj.name.toLowerCase() === "unknown"
  ) {
    return `${fallback}`;
  }
  return obj.name;
}

export function getType(obj: { type?: string } | undefined): string {
  if (
    !obj ||
    typeof obj !== "object" ||
    !obj.type ||
    obj.type.toLowerCase() === "unknown"
  ) {
    return "Unknown Planet";
  }
  return obj.type;
}

export function getDimension(obj: { dimension?: string } | undefined): string {
  if (
    !obj ||
    typeof obj !== "object" ||
    !obj.dimension ||
    obj.dimension.toLowerCase() === "unknown"
  ) {
    return "Unknown dimension";
  }
  return obj.dimension;
}

export function getResidentsCount(
  obj: { residents_count?: string } | undefined
): string {
  if (
    !obj ||
    typeof obj !== "object" ||
    !obj.residents_count ||
    obj.residents_count === "unknown"
  ) {
    return "Unknown ";
  }
  return obj.residents_count;
}
