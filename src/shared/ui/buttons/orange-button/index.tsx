type OrangeButtonType = {
  label: string;
  // eslint-disable-next-line react/require-default-props
  url?: string;
};

export function OrangeButtton({ label, url = '#' }: OrangeButtonType) {
  return (
    <a className="bg-orange-main py-3 px-6 rounded-md text-white text-lg text-center" href={url}>
      {label}
    </a>
  );
}

export default OrangeButtton;
