import logoImg from '../../../assets/images/logo.png'

const Logo = () => {
    return (
        <div className='flex items-center'>
            <img className='w-12 md:w-16' src={logoImg} alt="logo" />
            <h1 className='text-2xl font-bold text-myColor'>DineSmart</h1>
        </div>
    );
};

export default Logo;