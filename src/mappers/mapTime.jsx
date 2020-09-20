export const mapTime = (timestamp) => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} ani`;
  }
  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} luni`;
  }
  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} zile`;
  }
  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} ore`;
  }
  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minute`;
  }

  return `${Math.floor(seconds)} secunde`;
};
