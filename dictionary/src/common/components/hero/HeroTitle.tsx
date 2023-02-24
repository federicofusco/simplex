import Logo from "../navigation/Logo";

interface HeroTitleProps {
    title: string,
}

const HeroTitle = ({ title }: HeroTitleProps ) => {
return <div className="flex justify-center">
    <Logo height={ 48 } width={ 48 } />
    <h1 className="text-4xl my-auto ml-5 font-bold">{ title }</h1>
</div>
}

export default HeroTitle;