document.addEventListener('DOMContentLoaded', event => {
	document.querySelectorAll('pre > code').forEach(elem => {
		const text = elem.innerHTML.replace(/^\n+|\s+$/g, '');
		const index = text.search(/\S/);
		const lines = text.split(/\r\n|\n/);
		for (let i = 0; i != lines.length; i++)
			lines[i] = lines[i].substr(index);
		const fixed = lines.join('\n');//.replace(/\t/g, '→   ');
		elem.innerHTML = fixed;
	});
});