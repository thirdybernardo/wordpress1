<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress1' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'eP?EI6_5=*Lyypq%RW1UuOtphW)CQ=W/Is-Ecd67)Hbfmx1b}ACICg5:beo+}*$m' );
define( 'SECURE_AUTH_KEY',  'k(G]BG$(NLu$v>CHK{ciNH1k+mWud]{[,$0ORwfN_C(2zBd@6q<T[8q)~(~LYMgy' );
define( 'LOGGED_IN_KEY',    ':d]hpCna/3PhhO 8#6<U}vn1+6oAe@t><*}obeh_n+;05SxJC1ZuPC7r*mdP%U>m' );
define( 'NONCE_KEY',        '>q(jz&ZOc;Nl(2BY-^[45#X*39<!izC|9LLPztv(X=}h_;;RW1Z.}Cv1z;D[TuQb' );
define( 'AUTH_SALT',        'T#OfpaCL>!SF<@>l i,Qu?3e-Sv0mf0$Z&S5`lys=*n:-BuIz&PizRUF)$!+1tS%' );
define( 'SECURE_AUTH_SALT', '&AKa=cjo@9c9~BQ?(%tLR;|<ipUh5E0774~<zd;^4;3~?q!`zJ0CjOXKK+#xw~*~' );
define( 'LOGGED_IN_SALT',   '5tic7{2y.gkm/h!C{FdrWV!4b;!Y)ir.,GV|EoeAU|Kf4f*z+6;v?,qD oMN{$zj' );
define( 'NONCE_SALT',       '#h} y/MoIXn-i>vGC?z}(O[0wB5P%k]b1#CZ_fs-yU3j(W% RqF,](+UNm[2[Ql2' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
