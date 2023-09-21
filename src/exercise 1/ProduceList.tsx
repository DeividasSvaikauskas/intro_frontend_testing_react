/* eslint-disable @typescript-eslint/no-explicit-any */
import saleSvg from '../assets/sale.svg';

type ProduceListProps = {
  produce: any;
};

export default function ProduceList({ produce }: ProduceListProps) {
  return (
    <div style={{ display: 'flex', gap: '100px' }}>
      {produce.map((item: any, index: number) => (
        <div key={index} style={{ display: 'grid' }}>
          <h3>{item.name}</h3>
          {item.sale && (
            <img
              src={saleSvg}
              style={{ width: '80px', height: '80px' }}
              alt="sale"
              title="sale"
            />
          )}
        </div>
      ))}
    </div>
  );
}
