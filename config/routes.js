const rewritesRules = [
  {
    source: '/lojas',
    destination: '/stores',
  },
];

const redirectRules = [
  {
    source: '/',
    destination: '/lojas',
    permanent: true,
  },
];

module.exports = { rewritesRules, redirectRules };
