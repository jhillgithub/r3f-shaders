varying vec2 vUv;
uniform float uTime;
uniform sampler2D uPerlinTexture;

void main()
{
    // Scale and animate
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.3;
    smokeUv.y *= 0.125;
    smokeUv.y -= uTime * 0.03;

    // Smoke
    float smoke = texture(uPerlinTexture, smokeUv).r;
    // smoke = 1.0;

    // Increase smoke transparency
    smoke = smoothstep(0.2, 1.0, smoke);

    // Edges
    smoke *= smoothstep(0.0, 0.1, vUv.x);
    smoke *= smoothstep(1.0, 0.9, vUv.x);
    smoke *= smoothstep(0.0, 0.1, vUv.y);
    smoke *= smoothstep(1.0, 0.4, vUv.y);

    // Final color
    vec3 color = vec3(0.0, 1.0, 1.0);
    color = vec3(1.0);
    gl_FragColor = vec4(color, smoke);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}