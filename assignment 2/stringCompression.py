def compress_string(s):
    compressed = []

    count = 1
    for i in range(1,len(s)):
        if s[i] == s[i - 1]:
            count += 1
        else:
            compressed.append(s[i - 1])
            compressed.append(str(count))
            count = 1

    compressed.append(s[-1])
    compressed.append(str(count))

    compressed_str = ''.join(compressed)

    if len(compressed_str) >= len(s):
        return s
    else:
        return compressed_str

# Example usage:
original_str = "aaabcccccaaa"
compressed_str = compress_string(original_str)
print(compressed_str)  # Output: "a3b1c5a3"

original_str2 = "abcdef"
compressed_str2 = compress_string(original_str2)
print(compressed_str2)  # Output: "abcdef" (no compression, as compressed string is longer)
