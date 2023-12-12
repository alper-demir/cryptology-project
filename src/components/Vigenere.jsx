import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';

const VigenereCipher = () => {
    const [text, setText] = useState('');
    const [key, setKey] = useState('KEY');
    const [result, setResult] = useState('');
    const [isEncrypt, setIsEncrypt] = useState(true);

    const vigenere = (text, key, encrypt) => {
        const keyLength = key.length;
        let result = '';

        for (let i = 0, j = 0; i < text.length; i++) {
            const char = text[i];

            if (/[A-Za-z]/.test(char)) {
                const baseCharCode = char.toUpperCase() === char ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                const shift = key[j % keyLength].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
                const charCode = (char.charCodeAt(0) - baseCharCode + (encrypt ? shift : 26 - shift)) % 26 + baseCharCode;
                result += String.fromCharCode(charCode);
                j++;
            } else {
                result += char;
            }
        }

        return result;
    };

    const handleEncryptDecrypt = () => {
        if (isEncrypt) {
            setResult(vigenere(text, key, true));
        } else {
            setResult(vigenere(text, key, false));
        }
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(result);
    };

    return (
        <div className="container mx-auto mt-8 p-8 bg-gray-200 max-w-md rounded-md bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4 text-white">Vigenere Cipher</h2>
            <label className="block mb-2">
                Text:
                <textarea
                    className="w-full p-2 border rounded resize-none"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            <label className="block mb-2">
                Key:
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={key}
                    onChange={(e) => setKey(e.target.value.toUpperCase())}
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

export default VigenereCipher;
