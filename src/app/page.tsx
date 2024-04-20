import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/0fabdb4e-a509-40af-9c6e-0175ca9cc33b-kd6coh.43.07.png",
  "https://utfs.io/f/137600e0-9f56-46a4-9f64-c5af82e130fa-174yn.jpeg",
  "https://utfs.io/f/440a6f56-2914-41d5-8383-d5a5f9bad4be-pwed30.webp",
  "https://utfs.io/f/d1e385f5-b4a4-45e8-b40b-394cb7869cf0-f39mw7.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <Image src={image.url} alt="hello" width={160} height={90} />
          </div>
        ))}
      </div>
      Hello Gallery in progress.
    </main>
  );
}
