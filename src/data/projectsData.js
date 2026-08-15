const projectsData = [
  {
    slug: 'story-behind-magic',
    title: 'The Story of Behind my Magic',
    description:
      'Story of My Magic is a visual effects (VFX) short video created to showcase creativity through cinematic editing and digital effects. The concept follows an ordinary person discovering mysterious magical abilities that gradually transform everyday scenes into extraordinary moments. Throughout the video, a combination of particle effects, lighting enhancements, object manipulation, and smooth transitions is used to create the illusion of real magic. Each sequence was carefully planned, filmed, and edited to deliver an engaging and immersive experience while demonstrating practical VFX techniques. The project also focuses on storytelling by blending fantasy with realistic environments, allowing viewers to experience a believable magical journey. Published on YouTube, the video aims to entertain audiences.',
    technical:
      'The production of this VFX video involved a combination of creative planning and technical execution. Each scene was recorded with camera stability, consistent lighting, and proper framing to simplify the post-production workflow. During editing, multiple visual effects were created using techniques such as masking, motion tracking, keyframing, chroma keying, compositing, and color grading. Sound effects and background music were synchronized with the visuals to improve immersion and enhance the cinematic feel. Several layers of footage were combined to produce realistic magical effects while maintaining smooth transitions between scenes. Careful attention was given to rendering settings, frame rates, and video quality to ensure the final output was optimized for online viewing.',
    videoId: 'YcCQzwxr6LE',
    thumbnail: '/images/projects/story-behind-magic.jpg',
    gallery: Array.from(
      { length: 7 },
      (_, i) => `/images/projects/pr1/gallery${i + 1}.jpg`
    ),
  },
  {
    slug: 'behind-every-shot',
    title: 'Behind Every Magical Shot',
    description:
      'Behind Every Magical Shot offers a captivating look into the visual storytelling and intricate camera craftsmanship behind cinematic filmmaking. This project highlights the artistry of camera movement, precise framing, and environmental interaction that give every scene its enchanting atmosphere. By pulling back the curtain on how complex visual moments are conceived and executed, the video demonstrates how creative vision and camera technique work hand-in-hand to bring magical moments to life on screen.',
    technical:
      'The technical execution focused on advanced camera stabilization, precise timing, and multi-pass compositing. Camera moves were carefully rehearsed to align visual elements with dynamic post-production layers, such as focal depth adjustments and atmospheric lighting enhancements. In post-production, raw footage underwent meticulous color space transforms, secondary color grading, keyframe stabilization, and seamless frame blending to refine every visual detail and maintain a high-end cinematic aesthetic.',
    videoId: 'YcCQzwxr6LE',
    thumbnail: '/images/projects/behind-every-shot.jpg',
    gallery: Array.from(
      { length: 7 },
      (_, i) => `/images/projects/pr1/gallery${i + 1}.jpg`
    ),
  },
  {
    slug: 'pocket-fortress',
    title: 'The Pocket Fortress',
    description:
      'The Pocket Fortress is an imaginative visual effects short that transforms a compact, everyday miniature object into an epic, impenetrable stronghold. Blending real-world environments with digital architecture, the project explores scale manipulation and fantasy concepts in a realistic modern setting. The story follows the discovery of an ordinary item possessing extraordinary defensive mechanics, creating an intriguing contrast between microscopic detail and grand cinematic scale.',
    technical:
      'Creating the miniature stronghold involved complex 3D camera tracking, geometry replacement, and multi-layered compositing. High-resolution textures, dynamic lighting, and shadow casting were meticulously aligned with real-world plate lighting to ensure believable integration. Practical camera movement was matched in 3D space, while particle systems and volumetric smoke effects added realistic depth and tactile realism to the final composite.',
    videoId: 'AJVW6Mpu8JY',
    thumbnail: '/images/projects/pocket-fortress.jpg',
    gallery: Array.from(
      { length: 12 },
      (_, i) => `/images/projects/pocket-fortress/gallery${i + 1}.jpg`
    ),
  },
  {
    slug: 'the-melody',
    title: 'The Melody',
    description:
      'The Melody is a visually rich creative piece centered around music, rhythm, and artistic visual harmony. The video explores how sound waves and melodic beats translate into fluid, expressive visual effects that move in perfect sync with the soundtrack. Designed to evoke emotion and rhythm, the narrative highlights the deep connection between musical melody and cinematic visuals, creating an immersive sensory experience.',
    technical:
      'Technical production relied heavily on audio-reactive visual animation and precise audio-to-video editing workflows. Custom expressions and keyframe synchronization were utilized to link visual element properties—such as light intensity, scale, and color shifts—directly to audio frequencies. Extensive color grading and smooth frame transitions ensured the visual beats matched the rhythm effortlessly without overwhelming the screen.',
    videoId: 'XaTZ9ZKn4ec',
    thumbnail: '/images/projects/the-melody.jpg',
    gallery: Array.from(
      { length: 5 },
      (_, i) => `/images/projects/the-melody/gallery${i + 1}.png`
    ),
  },
  {
    slug: 'transformation-sad-memories',
    title: 'Transformation of Sad Memories',
    description:
      'Transformation of Sad Memories is a poignant visual story reflecting emotional growth, healing, and renewal. The narrative visually alters melancholic moments into vibrant, hopeful artwork through symbolic editing and glowing color transformations. By depicting the gradual shifts in mood from dark tone to warm illumination, the video portrays how past sorrow can evolve into strength and positivity.',
    technical:
      'The transformation effect was achieved through selective color keying, dynamic masking, and animated color transitions. Scenes start with muted, cold color palettes and seamlessly transition into rich, saturated tones using keyframed LUT interpolations and particle light blooms. Careful compositing ensured clean edge separation and subtle overlay blending to achieve a soft, surreal visual evolution.',
    videoId: 'JAwQDIwB9GE',
    thumbnail: '/images/projects/transformation-sad-memories.jpg',
    gallery: Array.from(
      { length: 7 },
      (_, i) => `/images/projects/pr1/gallery${i + 1}.jpg`
    ),
  },
  {
    slug: 'the-strange-tool',
    title: 'The Strange Tool',
    description:
      'The Strange Tool is a mystery-driven visual effects short showcasing a peculiar device with supernatural capabilities. The narrative revolves around an unsuspecting character discovering an unusual tool that alters physical reality upon activation. Through dramatic visual reveals, surreal distortions, and atmospheric tension, the project captures curiosity and wonder in a sleek, mysterious short film.',
    technical:
      'Post-production focused on realistic hard-surface tracking, heat distortion shaders, and digital object overlays. The tool\'s glowing energy effects were crafted using optical flare plugins, displacement maps, and custom particle simulation layers. Spatial audio design was carefully synchronized with energy pulses and device movements to emphasize the weight and realism of the fantastical tool.',
    videoId: 'iUAlM9Wtb7Q',
    thumbnail: '/images/projects/the-strange-tool.jpg',
    gallery: Array.from(
      { length: 9 },
      (_, i) => `/images/projects/the-strange-tool/gallery${i + 1}.png`
    ),
  },
];

export const projectsBySlug = projectsData.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});

export default projectsData;
