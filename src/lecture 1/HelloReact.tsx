import reactLogo from '../assets/react.svg';
import blueHeart from '../assets/blue-heart-svgrepo-com.svg';

export default function HelloReact({ name = 'React' }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <div>
        <img src={reactLogo} alt="react-logo" />
      </div>
      <div>
        <h2>Bouvet is da best!</h2>
        <img
          src={blueHeart}
          style={{ width: '150px', height: '150px' }}
          alt="blue-heart"
          title="blueHeart"
        />
      </div>
    </div>
  );
}
