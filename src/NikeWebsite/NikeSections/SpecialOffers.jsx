import Buttons from "../NikeComponents/Buttons";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";


export const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg '>
            <span className='mt-3 text-coral-red'> Special</span> 
            <span className='mt-3'> Offer</span> 
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Enmbark on a journey that redefines your experience with unbearable deals. From premier selectionsto incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectatutions. Your journey with us is nothing short of exceptional. </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Buttons label='Shop now' iconURL={arrowRight}/>
          <Buttons 
            label='Learn more' 
            backgroundColor="bg-white"
            borderColor="slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
      
    </section>
  )
}


export default SpecialOffers;