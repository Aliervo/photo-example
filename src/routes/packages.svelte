<script>
  import SvelteMarkdown from 'svelte-markdown'

  const source = `
    * In luctus augue ut facilisis pretium.
    * Aliquam quis purus ac nunc vehicula sagittis.
    * Sed ac quam porta, venenatis metus eget, imperdiet diam.
    * Etiam a est lacinia justo sagittis congue.
    `
</script>

<h1>Packages</h1>

<SvelteMarkdown {source} />
