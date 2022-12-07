export interface RegisterProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  scrollToTop: () => void;
  business?: boolean;
}
