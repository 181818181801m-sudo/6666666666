// core.cpp
#include <iostream>

extern "C" {
    // Проверка, не слишком ли часто нажимает пользователь (анти-чит)
    bool validate_click(int ms_diff) {
        return ms_diff >= 50; 
    }
}