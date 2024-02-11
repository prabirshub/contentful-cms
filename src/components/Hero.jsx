import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            I&apos;m baby semiotics roof party messenger bag, banjo artisan 3
            wolf moon vexillologist biodiesel. Cred activated charcoal messenger
            bag, fingerstache distillery kinfolk bicycle rights flexitarian
            bitters blue bottle beard bodega boys subway tile gochujang wolf.
            VHS pork belly PBR&B retro fingerstache, artisan jianbing synth.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  )
}
export default Hero
