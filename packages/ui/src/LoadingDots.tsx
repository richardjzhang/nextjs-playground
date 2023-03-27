export const LoadingDots = ({
  color = "#000",
  style = "small",
}: {
  color: string;
  style: string;
}) => {
  return (
    <span className={style == "small" ? "loading2" : "loading"}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};
