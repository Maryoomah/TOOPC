import Section from "../components/section";
export default function Home() {
  return (
    <>
      {/* hero */}
      <Section>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/hero1.webp)`,
          }}
        />

        <div className="absolute inset-0 z-10 bg-slate-950/75" />
      </Section>
    </>
  );
}
