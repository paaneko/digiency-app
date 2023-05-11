import { motion } from 'framer-motion';

function Path(props: any) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />;
}

function MenuToggle({ toggle }: any) {
  return (
    <button
      className="flex justify-center items-center outline-none border-none select-none cursor-pointer absolute top-[32px] left-[225px] w-[50px] h-[50px] rounded-full bg-transparent"
      type="button"
      onClick={toggle}
    >
      <svg className="fill-white" width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}

export default MenuToggle;
