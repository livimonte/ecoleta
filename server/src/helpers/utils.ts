// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import os = require('os');

const ip =
  Object.values(os.networkInterfaces()).reduce(
    (r, list) =>
      r?.concat(
        list
          ? list.reduce(
              (rr, i) =>
                rr
                  ? rr.concat(
                      (i.family === 'IPv4' && !i.internal && i.address) || [],
                    )
                  : [],
              [],
            )
          : [],
      ),
    [],
  )[0] || 'localhost';

export { ip };
