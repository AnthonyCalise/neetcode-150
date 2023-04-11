#include<iostream>
#include<unordered_map>
#include<vector>

using namespace std; 

bool containsDuplicate(const vector<int>& x) {
    unordered_map<int, int> mymap;

    for (auto &val : x) {
        mymap[val] = 0; 
    }
    
    for (const auto& val : x) {
        mymap[val]++; 
    }

    for (const auto& pair : mymap) {
        if (pair.second > 1) {
            return true;
        }
    }
    
    return false;
}


int main() {
    cout << containsDuplicate({1,2,3,4,5}) << endl;
    cout << containsDuplicate({1,2,3,4,5,6,7,8,9,1}) << endl;
    return 0;
}