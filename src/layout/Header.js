import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

export default function Header({
  title,
  intro_text,
  video_path,
  poster_path,
  logo,
  children,
}) {
  const _title = title ?? 'We are travel friends';
  const _intro_text =
    intro_text ??
    'Come and join us we travel the most famous and beautiful places in the world';
  const _video_path = video_path ?? '/assets/videos/header.mp4';
  const _poster_path = poster_path ?? '/assets/images/header_image.png';
  const _logo = logo ?? '/assets/icons/logo.png';
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  return (
    <div className='header'>
      {_logo ? (
        <LazyLoadImage
          className='header__logo'
          onClick={navigateHome}
          src={_logo}
          alt={_logo}
        />
      ) : null}
      <video
        className='header__video'
        poster={process.env.PUBLIC_URL + _poster_path}
        src={process.env.PUBLIC_URL + _video_path}
        autoPlay
        loop
        muted
      ></video>
      <div className='header__contents'>
        <div className='container'>
          <div className='header__contents__text'>
            <div className='header__contents__text__child'>
              <h1 className='header__contents__text__child__h1'>{_title}</h1>
              <p className='header__contents__text__child__p'>{_intro_text}</p>
              <div className='header__contents__text__child__link'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
