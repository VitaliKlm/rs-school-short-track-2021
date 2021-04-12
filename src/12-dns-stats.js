/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};
  let dnsLevelsCombin;
  let dnsLevels;
  domains.forEach((fullDomainName) => {
    // turn domain in template array 'dnsLevels'
    // 'dnsLevels' consist of Object key names
    dnsLevels = fullDomainName.split('.')
      .reverse()
      .join(' .')
      .split(' ');
    // 'dnsLevelsCombin' are combinations of 1 or more dns levels
    dnsLevelsCombin = '';
    dnsLevels.forEach((dnsLevel) => {
      dnsLevelsCombin += dnsLevel;
      if ([`.${dnsLevelsCombin}`] in dnsStats) {
        dnsStats[`.${dnsLevelsCombin}`]++;
      } else {
        dnsStats[`.${dnsLevelsCombin}`] = 1;
      }
    });
  });
  return dnsStats;
}

module.exports = getDNSStats;
