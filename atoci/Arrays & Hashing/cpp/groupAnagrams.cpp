#include<iostream>
#include<unordered_map>
#include<vector>
#include<string>
#include<algorithm> 

using namespace std; 

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> mymap; 

    for (const auto& word : strs) {
        const string sorted_word = word; 
        std::sort(sorted_word.begin(), sorted_word.end());           
        mymap[sorted_word].push_back(word);
    }

    vector<vector<string>> result; 
    
    for (const auto& vec : mymap) {
        result.push_back(vec.second);
    }

    return result;
}



int main() {

    vector<string> input_a = {"eat","tea","tan","ate","nat","bat"};
    vector<string> input_b = {"a"};
    vector<string> input_c = {"",""};
    vector<string> input_d = {"aba", "aba","baa"};
    vector<string> input_e = {"tea","","eat","","tea",""}; 


    vector<vector<string>> output = groupAnagrams(input_a);

    for (const auto& group : output) {
        for (const auto& str : group) {
            std::cout << str << " ";
        }
        std::cout << std::endl;
    }



    return 0;
}