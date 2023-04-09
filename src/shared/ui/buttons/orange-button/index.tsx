type OrangeButtonType = {
  label: string;
};

export function OrangeButton({ label }: OrangeButtonType) {
  return <div className="bg-orange-main py-3 px-6 rounded-md text-white text-lg text-center">{label}</div>;
}

export default OrangeButton;
