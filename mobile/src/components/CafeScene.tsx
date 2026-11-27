import { StyleSheet, View } from 'react-native';
import Svg, { ClipPath, Circle, Defs, Ellipse, G, Path, Rect } from 'react-native-svg';
import { colors } from '../theme/colors';

// Tonal shades of the brand colours for depth
const GREEN_LIGHT = '#3D7549';
const GREEN_DARK = '#244A2E';
const RED_DARK = '#A32F23';
const WALL = '#262626';
const DOOR = '#3A3A3A';
const INTERIOR = '#F6E6CC';
const PAVEMENT = '#E2D2B8';

// Striped awning geometry: narrower at the top, wider at the bottom, scalloped edge
const STRIPES = 8;
const TOP_L = 44;
const TOP_W = 232;
const TOP_Y = 130;
const BOT_L = 24;
const BOT_W = 272;
const BOT_Y = 176;

function stripePath(i: number) {
  const tw = TOP_W / STRIPES;
  const bw = BOT_W / STRIPES;
  const tl = TOP_L + i * tw;
  const tr = tl + tw;
  const bl = BOT_L + i * bw;
  const br = bl + bw;
  const r = bw / 2;
  return `M${tl} ${TOP_Y} L${tr} ${TOP_Y} L${br} ${BOT_Y} A${r} ${r} 0 0 1 ${bl} ${BOT_Y} Z`;
}

const ASPECT = 350 / 320;

type Props = { width?: number };

export function CafeScene({ width = 300 }: Props) {
  const height = width * ASPECT;
  return (
    <View style={[styles.shadow, { width, height, borderRadius: width * 0.2 }]}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 320 350"
        accessibilityRole="image"
        accessibilityLabel="Illustration of Cafe Gator: a cafe with a red and white striped awning and an alligator barista in the window"
      >
        <Defs>
          <ClipPath id="tile">
            <Rect width="320" height="350" rx="64" />
          </ClipPath>
          <ClipPath id="win">
            <Rect x="54" y="204" width="132" height="108" rx="13" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#tile)">
          {/* sky */}
          <Rect width="320" height="350" fill={INTERIOR} />
          <G opacity="0.85" fill={colors.white}>
            <Circle cx="52" cy="38" r="12" />
            <Circle cx="68" cy="30" r="16" />
            <Circle cx="86" cy="38" r="12" />
            <Rect x="52" y="38" width="34" height="12" rx="6" />
            <Circle cx="238" cy="30" r="9" />
            <Circle cx="251" cy="24" r="12" />
            <Circle cx="265" cy="30" r="9" />
            <Rect x="238" y="30" width="27" height="9" rx="4.5" />
          </G>

          {/* building */}
          <Rect x="30" y="66" width="260" height="10" rx="5" fill={colors.black} />
          <Rect x="36" y="72" width="248" height="266" fill={WALL} />
          <Rect x="36" y="328" width="248" height="10" fill={colors.black} />

          {/* sign plate with coffee cup */}
          <Rect x="96" y="82" width="128" height="32" rx="10" fill={colors.white} />
          <Circle cx="113" cy="98" r="3.5" fill={colors.black} />
          <Circle cx="207" cy="98" r="3.5" fill={colors.black} />
          <Path d="M148 90 L172 90 L170 104 Q160 109 150 104 Z" fill={colors.black} />
          <Path d="M172 93 Q181 93 180 99 Q179 104 171 103" fill="none" stroke={colors.black} strokeWidth="3" strokeLinecap="round" />

          {/* window */}
          <Rect x="48" y="198" width="144" height="120" rx="18" fill={colors.white} />
          <Rect x="54" y="204" width="132" height="108" rx="13" fill={INTERIOR} />
          <G clipPath="url(#win)">
            <Path d="M146 204 L172 204 L132 312 L106 312 Z" fill={colors.white} opacity="0.35" />

            {/* gator barista */}
            <G transform="translate(62.4 200.4) scale(0.36)">
              <Path d="M40 330 C40 252 98 232 160 232 C222 232 280 252 280 330 Z" fill={colors.gatorGreen} />
              <Ellipse cx="160" cy="268" rx="44" ry="46" fill={colors.white} />
              <Path d="M120 250 L200 250 L214 330 L106 330 Z" fill={colors.black} />
              <Circle cx="116" cy="94" r="34" fill={colors.gatorGreen} />
              <Circle cx="204" cy="94" r="34" fill={colors.gatorGreen} />
              <Rect x="62" y="88" width="196" height="164" rx="78" fill={colors.gatorGreen} />
              <Rect x="70" y="136" width="180" height="114" rx="57" fill={GREEN_LIGHT} />
              <Circle cx="128" cy="150" r="13" fill={GREEN_LIGHT} />
              <Circle cx="192" cy="150" r="13" fill={GREEN_LIGHT} />
              <Circle cx="116" cy="96" r="22" fill={colors.white} />
              <Circle cx="204" cy="96" r="22" fill={colors.white} />
              <Circle cx="120" cy="98" r="11" fill={colors.black} />
              <Circle cx="208" cy="98" r="11" fill={colors.black} />
              <Circle cx="124" cy="93" r="4" fill={colors.white} />
              <Circle cx="212" cy="93" r="4" fill={colors.white} />
              <Ellipse cx="128" cy="151" rx="5" ry="6.5" fill={GREEN_DARK} />
              <Ellipse cx="192" cy="151" rx="5" ry="6.5" fill={GREEN_DARK} />
              <Circle cx="94" cy="214" r="11" fill={colors.red} opacity="0.22" />
              <Circle cx="226" cy="214" r="11" fill={colors.red} opacity="0.22" />
              <Path d="M104 202 Q160 238 216 202" fill="none" stroke={colors.black} strokeWidth="6" strokeLinecap="round" />
              <Path d="M121 212 L129 227 L137 218 Z" fill={colors.white} />
              <Path d="M148 220 L155 233 L162 222 Z" fill={colors.white} />
              <Path d="M199 212 L191 227 L183 218 Z" fill={colors.white} />
              <Path d="M160 254 L112 230 Q104 252 112 278 Z" fill={colors.red} />
              <Path d="M160 254 L208 230 Q216 252 208 278 Z" fill={colors.red} />
              <Rect x="148" y="240" width="24" height="28" rx="8" fill={RED_DARK} />
            </G>
          </G>

          {/* coffee on the sill */}
          <Path d="M158 288 L180 288 L177 314 L161 314 Z" fill={colors.white} />
          <Path d="M159 298 L179 298 L178 306 L160 306 Z" fill={colors.red} />
          <Rect x="156" y="283" width="26" height="7" rx="3.5" fill={colors.black} />
          <Rect x="44" y="312" width="152" height="12" rx="6" fill={colors.white} />

          {/* door */}
          <Rect x="204" y="198" width="62" height="132" rx="10" fill={colors.white} />
          <Rect x="210" y="204" width="50" height="126" rx="6" fill={DOOR} />
          <Rect x="217" y="214" width="36" height="56" rx="8" fill={INTERIOR} />
          <Rect x="249" y="282" width="4" height="24" rx="2" fill={colors.white} />

          {/* awning: soft shadow, then red and white stripes */}
          <G transform="translate(0 8)" opacity="0.18" fill={colors.black}>
            {Array.from({ length: STRIPES }, (_, i) => (
              <Path key={`shadow${i}`} d={stripePath(i)} />
            ))}
          </G>
          {Array.from({ length: STRIPES }, (_, i) => (
            <Path key={`stripe${i}`} d={stripePath(i)} fill={i % 2 === 0 ? colors.red : colors.white} />
          ))}
          <Rect x="38" y="122" width="244" height="11" rx="5.5" fill={RED_DARK} />

          {/* pavement */}
          <Rect x="0" y="336" width="320" height="14" fill={PAVEMENT} />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: INTERIOR,
    shadowColor: colors.black,
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8, // Android shadow
  },
});