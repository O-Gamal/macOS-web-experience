import { useEffect, useState } from 'react';

interface Navigator {
  getBattery(): Promise<BatteryManager>;
}

interface BatteryManager extends EventTarget {
  charging: boolean;
  level: number;
}

const Battary = () => {
  const [loading, setLoading] = useState(true);
  const [batteryState, setBatteryState] = useState({
    level: 0,
    charging: false,
  });

  useEffect(() => {
    let battery: BatteryManager | null = null;
    console.log('navigator', navigator);

    const updateBatteryInfo = () => {
      if (battery) {
        setBatteryState({
          level: battery.level,
          charging: battery.charging,
        });
      }
    };

    if ('getBattery' in navigator) {
      (navigator as Navigator).getBattery().then((bm) => {
        battery = bm;
        updateBatteryInfo();

        battery.addEventListener('chargingchange', () => updateBatteryInfo());
        battery.addEventListener('levelchange', () => updateBatteryInfo());
      });
    } else {
      setBatteryState({
        level: 1,
        charging: false,
      });
    }
    setLoading(false);

    return () => {
      if (battery) {
        battery.removeEventListener('chargingchange', updateBatteryInfo);
        battery.removeEventListener('levelchange', updateBatteryInfo);
      }
    };
  }, []);

  return (
    <div className=''>
      {!loading && (
        <div className='flex items-center'>
          <span className='text-xs font-medium'>
            {Math.floor(batteryState.level! * 100)}%
          </span>
          <svg
            height='26'
            viewBox='0 0 56 56'
            width='56'
            xmlns='http://www.w3.org/2000/svg'
            className='-mx-2'
          >
            <path d='m9.4633 42h31.3848c3.0305 0 5.5823-.2835 7.3898-2.0911 1.8078-1.8076 2.0556-4.3241 2.0556-7.3544v-9.0912c0-3.0304-.2478-5.5646-2.0556-7.3544-1.8252-1.8076-4.3593-2.1089-7.3898-2.1089h-31.438c-2.9772 0-5.5291.3013-7.3367 2.1089-1.8076 1.8075-2.0734 4.324-2.0734 7.3012v9.1444c0 3.0303.2658 5.5645 2.0734 7.3544 1.8076 1.8076 4.3595 2.0911 7.3899 2.0911zm-.4962-2.8532c-1.8253 0-3.7392-.2481-4.8025-1.3113-1.0811-1.0811-1.3114-2.9596-1.3114-4.7849v-10.0304c0-1.8607.2303-3.7746 1.2936-4.8379 1.0811-1.081 3.0127-1.3291 4.8735-1.3291h32.3239c1.8078 0 3.7394.2658 4.8028 1.3291 1.0808 1.081 1.2935 2.9595 1.2935 4.7848v10.0835c0 1.8253-.2305 3.7038-1.2935 4.7849-1.0634 1.081-2.995 1.3113-4.8028 1.3113zm-.3545-2.4101h33.0862c1.3113 0 2.0379-.1772 2.6048-.7266.5673-.5671.7266-1.3113.7266-2.605v-10.7924c0-1.3114-.1771-2.038-.7266-2.6051-.5669-.5671-1.2935-.7266-2.6048-.7266h-33.0862c-1.3113 0-2.0379.1595-2.605.7266s-.7266 1.2937-.7266 2.6051v10.7924c0 1.2937.1595 2.0379.7266 2.605.5671.5494 1.2937.7266 2.605.7266zm44.109-4.2532c1.3998-.0886 3.2784-1.8784 3.2784-4.5898 0-2.6937-1.8786-4.4836-3.2784-4.5722z' />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Battary;
