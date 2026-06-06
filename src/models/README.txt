LUMORC — custom models for the scroll centerpiece
==================================================

Drop your own 3D models here to replace the built-in procedural shapes that
the particle cloud morphs into.

WHAT TO PROVIDE
  • Format : uncompressed .glb  (glTF binary, no Draco compression)
  • Files  : name them EXACTLY (each maps to a section via its data-stage)
                laptop.glb           → "Real-time 3D & WebGL" section
                Web_experiences.glb  → "Web experiences" section
                phone.glb            → "Every screen" section
                approach.glb   → "How a project runs" (Approach) section
                Studio.glb     → "Studio" section
            (Which section shows which object is set by data-stage="..." on
             each <section> in src/index.html — change those to remap.)

HOW IT WORKS
  • The cloud samples ~20,000 points off your model's surface, so any shape
    works (a laptop, a phone, a logo, a character — anything).
  • The model is auto-centered and auto-scaled to fit, so size doesn't matter.
  • Orientation IS kept — face the model "front" (toward +Z) in your 3D tool.
  • If a file is missing here, the built-in procedural shape is used instead.

AFTER ADDING/CHANGING A FILE
  • Restart the dev server (Ctrl+C, then `npm run dev`) or run `npm run build`,
    because the file list is read when the build starts.

WANT DIFFERENT STAGES?
  • The mapping (which file → which scroll stage) lives at the top of
    src/liquid.js. Add more stages or rename files there.

EXPORTING FROM BLENDER (quick guide)
  • File ▸ Export ▸ glTF 2.0 (.glb)
  • Format: "glTF Binary (.glb)"
  • Leave compression OFF.
