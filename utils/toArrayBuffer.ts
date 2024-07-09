export const convertToArrayBuffer = async (uri: string) => {
  const res = await fetch(uri);
  const blob = await res.blob();
  const arrayBuffer = await new Response(blob).arrayBuffer();
  return arrayBuffer;
};
