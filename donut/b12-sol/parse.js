
const fs = require("fs")
const { tonelli } = require("./test/tonelli")

function conv(arg) {
    return Buffer.from(arg.split(" ").map(a => parseInt(a,10))).toString("hex")
}

let key0 = conv("79 163 246 127 201 19 135 139 6 141 31 161 205 221 197 73 19 211 191 152 141 190 90 54 162 15 168 136 242 13 72 148 196 8 166 119 63 61 123 222 17 21 79 42 48 118 183 0 211 69 164 47 210 90 14 94 131 244 219 85 134 172 121 121 172 32 83 205 149 216 242 239 211 233 89 87 28 236 202 167 67 224 44 244 190 63 93 122 173 219 11 6 252 154 255 0 136 202 154 232 178 121 9 216 16 225 150 240 126 33 199 153 201 215 11 151 45 76 178 144 113 184 228 15 110 110 55 185 135 121 204 34 28 143 9 80 209 0 186 135 126 67 17 0 36 87 234 187 53 124 2 90 145 117 84 67 37 146 88 135 147 94 219 65 128 224 236 204 124 120 210 9 42 189 40 58 121 215 77 91 66 172 166 134 130 79 157 85 76 192 156 0")

let key1 = conv("54 43 114 195 182 61 41 128 187 32 135 236 29 184 222 160 58 97 79 201 219 134 176 182 251 172 212 62 83 2 37 207 241 49 246 219 130 53 106 33 240 87 179 101 204 11 101 1 7 17 177 49 203 132 214 167 66 208 111 80 0 195 80 105 242 207 255 4 248 127 33 179 199 26 238 239 160 248 67 3 223 254 190 250 170 112 163 39 210 13 31 111 181 178 52 1 245 243 78 61 199 194 180 216 51 15 34 126 211 148 163 125 248 165 201 157 91 151 232 198 160 171 119 86 248 19 49 252 87 239 197 129 14 110 164 117 140 193 253 41 201 98 72 0 10 31 52 152 3 167 204 77 58 129 81 5 136 238 62 215 180 194 217 107 25 209 104 46 52 230 42 27 225 29 18 205 67 97 197 80 206 95 146 132 129 130 92 149 140 98 137 0")
let key2 = conv("44 143 62 136 47 115 10 199 238 30 232 39 234 21 217 229 25 67 110 167 244 153 234 15 188 10 199 95 69 116 116 190 255 254 118 151 142 228 191 248 184 242 169 98 108 214 63 1 224 88 88 84 64 250 48 22 176 155 184 116 80 192 80 234 47 47 182 54 193 156 96 117 147 189 47 233 222 93 17 101 106 42 252 161 125 29 245 131 222 60 64 92 170 120 1 0 38 49 142 18 72 73 176 58 36 218 55 182 28 32 193 252 86 171 71 137 212 18 242 249 197 149 99 191 30 75 29 21 251 196 58 48 158 181 81 27 85 68 16 184 167 205 44 1 71 184 191 83 22 13 41 129 244 37 197 86 141 236 120 227 160 203 7 42 157 51 163 193 79 135 14 112 249 184 112 72 127 68 142 190 5 158 202 152 168 228 155 161 47 133 152 0")

console.log("k0", key0, key0.length)
console.log("k1", key1, key1.length)
console.log("k2", key2, key2.length)

let sig0 = conv("134 54 104 41 107 170 237 58 151 113 162 195 223 180 192 160 112 159 148 83 192 205 211 212 212 166 234 4 92 107 109 132 106 100 0 23 239 169 248 17 32 215 100 207 237 176 240 128")
let sig1 = conv("184 204 68 100 231 36 152 38 92 76 190 74 143 76 75 172 135 26 126 146 164 112 178 76 121 200 218 57 6 144 231 212 17 49 105 174 61 215 10 92 124 94 200 181 157 54 160 129")
let sig2 = conv("145 161 194 186 255 126 69 255 44 194 96 15 229 43 145 253 99 169 212 89 221 206 48 200 204 236 51 182 51 131 246 118 63 102 68 254 37 233 150 166 57 192 237 208 76 86 107 129")

let stuff = conv("0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 5 252 151 98 176 6 151 211 186 106 97 87 204 78 92 218 200 207 155 2 117 90 33 163 35 130 209 223 117 23 177 246 93 94 230 32 40 42 235 181 210 249 151 243 17 93 59 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 30 193 159 128 153 39 77 28 151 139 146 143 36 166 188 174 131 145 175 95 170 33 131 1 192 135 7 129 8 46 66 18 65 126 102 157 64 25 12 163 82 36 82 242 91 73 73 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 132 128 190 113 199 133 254 200 150 48 162 163 132 29 1 197 101 240 113 32 62 80 49 126 165 1 245 87 219 107 155 113 136 159 82 187 83 84 2 116 227 228 143 124 0 81 150 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 234 96 64 231 0 64 49 112 220 90 81 177 177 64 213 83 39 119 238 102 81 206 203 231 34 62 206 7 153 201 222 92 248 153 132 191 247 111 230 178 107 254 250 110 161 106 254 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 69 44 223 186 128 161 110 236 218 146 84 160 238 89 134 60 30 236 128 140 64 121 54 58 154 159 172 193 214 117 251 36 59 212 187 194 115 131 209 148 116 182 187 246 2 178 34 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 182 35 166 69 65 187 210 39 230 104 29 87 134 216 144 184 51 200 70 195 155 247 157 250 143 178 20 235 38 67 61 212 145 165 4 209 173 216 244 171 102 242 46 122 20 112 110 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 240 249 196 69 209 242 144 181 248 177 170 184 132 92 130 27 182 123 211 130 13 151 145 69 51 200 144 26 234 104 92 15 42 168 171 121 17 7 220 83 132 22 227 89 36 9 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 57 75 116 186 246 53 182 148 88 109 225 93 117 110 53 141 108 16 41 34 189 2 81 247 180 90 88 123 8 162 18 186 253 88 8 162 244 254 152 207 250 134 126 170 34 215 234 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 63 214 108 98 169 242 184 248 191 228 142 151 118 254 255 190 116 116 69 95 199 10 188 15 234 153 244 167 110 67 25 229 217 21 234 39 232 30 238 199 10 115 47 136 62 143 44 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 120 170 92 64 60 222 131 245 29 125 161 252 42 106 101 17 93 222 233 47 189 147 117 96 156 193 54 182 47 47 234 80 192 80 116 184 155 176 22 48 250 64 84 88 88 224 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 44 205 167 184 16 68 85 27 81 181 158 48 58 196 251 21 29 75 30 191 99 149 197 249 242 18 212 137 71 171 86 252 193 32 28 182 55 218 36 58 176 73 72 18 142 49 38 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 152 133 47 161 155 228 168 152 202 158 5 190 142 68 127 72 112 184 249 112 14 135 79 193 163 51 157 42 7 203 160 227 120 236 141 86 197 37 244 129 41 13 22 83 191 184 71")

console.log("alt1", conv("0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 5 252 151 98 176 6 151 211 186 106 97 87 204 78 92 218 200 207 155 2 117 90 33 163 35 130 209 223 117 23 177 246 93 94 230 32 40 42 235 181 210 249 151 243 17 93 59 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 30 193 159 128 153 39 77 28 151 139 146 143 36 166 188 174 131 145 175 95 170 33 131 1 192 135 7 129 8 46 66 18 65 126 102 157 64 25 12 163 82 36 82 242 91 73 73"))
console.log("alt2", conv("0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 240 249 196 69 209 242 144 181 248 177 170 184 132 92 130 27 182 123 211 130 13 151 145 69 51 200 144 26 234 104 92 15 42 168 171 121 17 7 220 83 132 22 227 89 36 9 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 57 75 116 186 246 53 182 148 88 109 225 93 117 110 53 141 108 16 41 34 189 2 81 247 180 90 88 123 8 162 18 186 253 88 8 162 244 254 152 207 250 134 126 170 34 215 234"))

function max(a,b) {
    if (a < b) return b
    else return a
  }
  
function min(a,b) {
    if (a > b) return b
    else return a
}

let base = 0x1ae3a4617c510eac63b05c06ca1493b1a22d9f300f5138f1ef3622fba094800170b5d44300000008508c00000000001n

function uncompressSig(comp) {
    let sig = comp.reverse()
    let greatest = (sig[0] & 0x80) == 0
    sig[0] = sig[0] & 0x7f
    let x = BigInt("0x"+Buffer.from(sig).toString("hex"))
    let [a, b] = tonelli((x ** 3n + 1n) % base, base)
    let y = greatest ? max(a,b) : min(a,b)
    return `0x${x.toString(16).padStart(128,0)}${y.toString(16).padStart(128,0)}`
}
  
function main() {
    let data = fs.readFileSync(process.argv[2]).toString()
    // console.log(data)
    let sig = data.match(/sig=\"\[([0-9 ]*)/)[1]
    let extra = data.match(/extra=\"\[([ 0-9]*)/)[1]
    let dta = data.match(/data=\"\[([ 0-9]*)/)[1]
    let sig_arr = sig.split(" ").map(a => parseInt(a,10))
    console.log(`export SIG=${sig_arr}`)
    console.log(`export SIGHEX=${conv(sig)}`)
    console.log(`export SIG_UNCOMPRESSED=${uncompressSig(sig_arr)}`)
    console.log(`export EXTRA_DATA=${conv(extra)}`)
    console.log(`export EPOCH_DATA=${conv(dta)}`)
}

main()

