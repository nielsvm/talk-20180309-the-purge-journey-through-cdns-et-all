// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'convex', // none/fade/slide/convex/concave/zoom
  transitionSpeed: 'fast', // default/fast/slow

  // Optional reveal.js plugins
  dependencies: [
    { src: 'src/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'src/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'src/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'src/reveal/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'src/reveal/plugin/zoom-js/zoom.js', async: true },
    { src: 'src/reveal/plugin/notes/notes.js', async: true }
  ]
});
