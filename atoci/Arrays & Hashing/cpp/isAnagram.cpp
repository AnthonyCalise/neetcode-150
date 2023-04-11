#include<iostream>
#include<unordered_map>
#include<vector>
#include<string> 

using namespace std; 

bool isAnagram(const string& s, const string& t) {
    unordered_map<char, int> mymap;

    if (s.length() != t.length()) {
        return false; 
    }

    for (char c : s) {
        mymap[c] = 0;
    }

    for (char c : s) {
        mymap[c]++;
    }

    for (char c : t) {
        if (mymap.find(c) != mymap.end()) {
            mymap[c]--;
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


int main() {

    cout << isAnagram("fag","gaf") << endl;
    cout << isAnagram("fago", "gafa") << endl; 
    return 0;
}