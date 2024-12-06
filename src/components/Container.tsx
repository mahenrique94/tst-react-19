type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => (
  <main className="container">{children}</main>
);
