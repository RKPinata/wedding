interface CopyablePProps {
  copyableText: string;
}

const CopyableP: React.FC<CopyablePProps> = ({ copyableText }) => {
  return (
    <p
      onClick={() => navigator.clipboard.writeText(copyableText)}>
      {copyableText}
    </p>
  );
};

export default CopyableP;
