#include<iostream>
#include<unordered_map>
#include<vector>
#include<string> 
#include<thread> 
#include<tuple>

using namespace std; 

bool isAnagramChunk(const string& s, const string& t, unordered_map<char, int>& mymap, size_t start, size_t end) {
    for (size_t i = start; i < end; i++) {
        mymap[s[i]]++;
    }
    for (size_t i = 0; i < t.length(); i++) {
        if (mymap.find(t[i]) != mymap.end()) {
            mymap[t[i]]--;
        } else {
            return false;
        }
    }

    for (auto& pair : mymap) {
        if (pair.second != 0) {
            return false;
        }
    }

    return true;
}


bool isAnagramFast(const std::string& s, const std::string& t) {
    if (s.length() != t.length()) {
        return false; 
    }

    size_t num_threads = thread::hardware_concurrency();
    size_t chunk_size = s.length() / num_threads;
    size_t start = 0;

    vector<std::thread> threads;
    unordered_map<char, int> mymap;

    for (auto c : s) {
        mymap[c]++;
    }

    for (size_t i = 0; i < num_threads; i++) {
        size_t end = (i == num_threads - 1) ? s.length() : start + chunk_size;
        threads.emplace_back(isAnagramChunk, std::ref(s), std::ref(t), std::ref(mymap), start, end);
        start = end;
    }

    for (auto& thread : threads) {
        thread.join();
    }

    for (auto& pair : mymap) {
        if (pair.second != 0) {
            return false;
        }
    }

    return true;
}


int main() {

    cout << isAnagramFast("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCDEFGHIJKLMNOPQRSTUVWXYY") << endl;
    cout << isAnagramFast("fag","gaf") << endl;
    cout << isAnagramFast("fago", "gafa") << endl; 
    
    return 0;
}
