#include<iostream>
#include<unordered_map>
#include<vector>

using namespace std; 

vector<int> twoSum(const vector<int>& nums, const int& target) {
    unordered_map<int, int> mymap;
    int lookup; 

    for (int i = 0; i < nums.size(); i++) {
        lookup = target - nums[i];

        if (mymap.find(lookup) != mymap.end()) {
            return {mymap[lookup], i};
        }
        mymap[nums[i]] = i;
    }
    
    return {};
}

ostream& operator<<(ostream& os, const vector<int>& nums) {
    for (const auto& val : nums) {
        os << val << " ";
    }
    return os; 
}


int main() {
    vector<int> result; 
    
    cout << twoSum({2,7,11,15}, 9) << endl;
    cout << twoSum({3,2,4}, 6) << endl;
    cout << twoSum({3,3}, 6) << endl; 
    return 0;
}