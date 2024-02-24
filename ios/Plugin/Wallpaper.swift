import Foundation

@objc public class Wallpaper: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
