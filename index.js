(function () {
  function _0x1a3b() {
    return {
      't': 'u_a',
      'pUrl': window['location']['href'],
      'uA': navigator['userAgent'],
      'sR': `${screen['width']}x${screen['height']}`,
      'lA': navigator['language'],
      'tz': Intl.DateTimeFormat().resolvedOptions().timeZone,
      'rH': document.referrer || 'direct', // Referrer (asal trafik)
      'oS': navigator.platform, // Sistem operasi
      'tS': performance.now(),
      'ts': new Date().toISOString(),
      'e': []
    };
  }

  let _0x1b2c = _0x1a3b();

  document.addEventListener('mousemove', function (_0x1c2d) {
    _0x1b2c.e.push({
      'et': 'mm',
      'x': _0x1c2d.clientX,
      'y': _0x1c2d.clientY,
      't': new Date().getTime(),
    });
  });

  document.addEventListener('click', function (_0x1d3e) {
    _0x1b2c.e.push({
      'et': 'cl',
      'x': _0x1d3e.clientX,
      'y': _0x1d3e.clientY,
      't': new Date().getTime(),
    });
  });

  setInterval(function () {
    const _0x1e4f = `${window.location.origin}/detect`;

    fetch(_0x1e4f, {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
      },
      'body': JSON.stringify(_0x1b2c),
    })
      .then(_0x2a6b => _0x2a6b.json())
      .then(_0x2b7c => {
        if (_0x2b7c.status === 'sus') {
          alert('Suspicious activity detected!');
        }
      })
      .catch(_0x2c8d => console.error('Error:', _0x2c8d));

    _0x1b2c = _0x1a3b();
  }, 5000);
})();
        
