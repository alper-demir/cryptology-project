import { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';

const AffineCipher = () => {
    const [text, setText] = useState('');
    const [keyA, setKeyA] = useState(5);
    const [keyB, setKeyB] = useState(8);
    const [result, setResult] = useState('');
    const [isEncrypt, setIsEncrypt] = useState(true);

    const modInverse = (a, m) => { // 1, 3, 5, 7, 9, 11, 15, 17, 19, 21 and 23 valid for key a, because there are prime to 26.
        for (let i = 1; i < m; i++) {
            if ((a * i) % m === 1) {
                return i; // modular reverse found
            }
        }
        return 1;
    };

    const encrypt = (text, a, b) => {
        return text
            .split('')
            .map((char) => {
                const charCode = char.charCodeAt(0);
                if (charCode >= 65 && charCode <= 90) { // 65 - 90 upper case letters
                    return String.fromCharCode(((a * (charCode - 65) + b) % 26) + 65);
                } else if (charCode >= 97 && charCode <= 122) { // 97 - 122 upper case letters
                    return String.fromCharCode(((a * (charCode - 97) + b) % 26) + 97);
                } else {
                    return char;
                }
            })
            .join('');
    };

    const decrypt = (text, a, b) => {
        const modA = modInverse(a, 26);

        return text
            .split('')
            .map((char) => {
                const charCode = char.charCodeAt(0);
                if (charCode >= 65 && charCode <= 90) {
                    return String.fromCharCode((modA * (charCode - b - 65 + 26)) % 26 + 65);
                } else if (charCode >= 97 && charCode <= 122) {
                    return String.fromCharCode((modA * (charCode - b - 97 + 26)) % 26 + 97);
                } else {
                    return char;
                }
            })
            .join('');
    };

    const handleEncryptDecrypt = () => {
        if (isEncrypt) {
            setResult(encrypt(text, keyA, keyB));
        } else {
            setResult(decrypt(text, keyA, keyB));
        }
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(result);
    };

    return (
        <div className="container mx-auto mt-8 p-8 bg-gray-200 max-w-md rounded-md bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4 text-white">Affine Cipher</h2>
            <label className="block mb-2">
                Text:
                <textarea
                    className="w-full p-2 border rounded resize-none"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            <label className="block mb-2">
                Key A:
                <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={keyA}
                    onChange={(e) => setKeyA(parseInt(e.target.value))}
                />
            </label>
            <label className="block mb-2">
                Key B:
                <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={keyB}
                    onChange={(e) => setKeyB(parseInt(e.target.value))}
                />
            </label>
            <label className="block mb-4">
                <input
                    type="checkbox"
                    checked={isEncrypt}
                    onChange={() => setIsEncrypt(!isEncrypt)}
                    className="mr-2"
                />
                Encrypt
            </label>
            <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                onClick={handleEncryptDecrypt}
            >
                {isEncrypt ? 'Encrypt' : 'Decrypt'}
            </button>
            {result && (
                <div className="mt-4">
                    <strong>Result:</strong>
                    <div className="border p-2 rounded mt-2 bg-gray-300 flex justify-between bg-opacity-50">

                        <div>
                            {result}
                        </div>
                        <div>
                            <span className="cursor-pointer text-blue-500" onClick={handleCopyToClipboard}>
                                <FaClipboard className="inline-block" />
                            </span>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default AffineCipher;
